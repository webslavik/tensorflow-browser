(function () {
    const selectedImg = document.getElementById('selectedImg');
    const imgFile = document.getElementById('imgFile');
    const predictBtn = document.getElementById('predictBtn');
    const predictList = document.getElementById('predictList');
    const predictionResult = document.getElementById('predictionResult');


    imgFile.addEventListener('change', function () {
        const reader = new FileReader();
        reader.onload = function() {
            const dataURL = reader.result;
            selectedImg.setAttribute('src', dataURL);
        }

        const file = imgFile.files[0];
        reader.readAsDataURL(file);
        predictBtn.disabled = false;
    });

    predictBtn.addEventListener('click', function () {
        predictList.innerHTML = '';


        mobilenet.load().then(model => {
            model.classify(selectedImg).then(predictions => {
                predictions.forEach((predict, index) => {
                    const li = document.createElement('li');
                    li.classList.add('list-group-item');
                    li.innerHTML = `${index+1}. ${predict.className}: ${predict.probability}`;

                    predictList.appendChild(li);
                });

                predictionResult.style.display = 'block';
            });
        });
    });
})();

(function () {
    const img = document.getElementById('img');
    const imgFile = document.getElementById('img-file');

    // imgFile.addEventListener('change', function () {
    //     const imgSrc

    // });
    
    mobilenet.load().then(model => {
        // Classify the image.
        model.classify(img).then(predictions => {
          console.log('Predictions: ');
          console.log(predictions);
        });
    });
})();

setInterval(myFuncSuper, 1000);
    function myFuncSuper() {
        let clean = document.querySelector("time")
        if (clean.parentNode) {
            clean.parentNode.removeChild(clean)
        }
        console.log(clean)

        let timeNow = Date()
        document.write(timeNow)
    }
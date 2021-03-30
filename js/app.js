setInterval(myFuncSuper, 1000);
    function myFuncSuper() {
        let clean = function(){
          document.querySelector("time")
        if (clean.parentNode) {
            clean.parentNode.removeChild(clean)
        }
        }
        let timeNow = Date()
        document.write(timeNow)
    }
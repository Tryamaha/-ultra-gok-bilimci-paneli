window.INDIBridge = {
    connectServer(ip){
        alert("INDI Server bağlantı isteği gönderildi: " + ip);

        if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.indi){
            window.webkit.messageHandlers.indi.postMessage({
                action:"connect",
                host:ip
            });
        }
    },

    gotoTarget(ra,dec){
        alert("Teleskop hedef koordinata yönlendiriliyor");

        if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.indi){
            window.webkit.messageHandlers.indi.postMessage({
                action:"goto",
                ra:ra,
                dec:dec
            });
        }
    },

    captureExposure(sec){
        alert(sec + " saniyelik CCD pozlama başlatıldı");

        if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.indi){
            window.webkit.messageHandlers.indi.postMessage({
                action:"capture",
                seconds:sec
            });
        }
    }
};

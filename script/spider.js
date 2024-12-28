document.addEventListener("DOMContentLoaded", () => {
    const spiderContainer = document.querySelector(".spider-container");
    
    if (!spiderContainer) {
        console.error("Le conteneur .spider-container est introuvable.");
        return;
    }
    
    if (document.body.classList.contains("dark-mode")) {
        addSpiders(spiderContainer, 5); 
    }

    function addSpiders(container, spiderCount) {
        for (let i = 0; i < spiderCount; i++) {
            
            const spider = document.createElement("div");
            spider.classList.add("spider");
            
            const web = document.createElement("div");
            web.classList.add("web");
            
            const body = document.createElement("div");
            body.classList.add("spider-body");
            
            for (let j = 1; j <= 4; j++) {
                const leg = document.createElement("div");
                leg.classList.add("leg", `leg${j}`);
                body.appendChild(leg);
            }
            
            const randomX = Math.random() * 90 + 5;
            spider.style.left = `${randomX}%`;
            spider.style.position = "absolute"; 
            
            spider.appendChild(web);
            spider.appendChild(body);
            container.appendChild(spider);
        }
    }
});




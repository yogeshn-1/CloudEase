const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

let domainPricesContainer=document.querySelector(".list.block--domain__prices")

domainPricesContainer.addEventListener("click",function(e){
    if(e.target.matches('span'))
    {
      //To remove styling from the previously selected domain
      let allListItem= e.target.parentElement.parentElement.children;
      for (let item of allListItem){
        item.children[0].removeAttribute("class");
      }
      let selectedSpan=e.target;
      selectedSpan.setAttribute("class","badge badge--secondary");
    }
  }
)


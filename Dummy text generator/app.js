const text =[
  `  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Mauris risus urna, tempor nec purus eget, laoreet eleifend mi. 
  Quisque lobortis erat ut efficitur sagittis. Morbi elit eros, lacinia vitae elit et, congue tempus sapien.
   In turpis mi, vestibulum eu lorem eu, viverra suscipit nisl. Donec sed justo ex. 
   Ut sit amet sagittis neque, non condimentum leo. 
   Fusce mollis nisi eu orci mattis, vel ultricies massa sollicitudin.
    Mauris lobortis sollicitudin sem, ultricies finibus ligula egestas vitae.
     Nullam quis pretium tellus, quis commodo erat. Etiam ultrices dolor vitae magna egestas, sed auctor massa pulvinar.`,

`    Proin nec diam ultrices, lobortis sapien non, lacinia augue. Nullam et nibh ante. Curabitur nibh est, ullamcorper vitae eleifend ac, tempus nec ex. Curabitur vel purus ornare, dictum ex in, malesuada nunc. Ut a quam sit amet quam gravida hendrerit. Aenean suscipit velit sit amet erat aliquam, at ultricies erat auctor. Donec fermentum arcu eu lorem ultrices, ac egestas libero venenatis. Donec ut mollis justo.`,
`    
    Pellentesque rhoncus consectetur porttitor. Mauris pulvinar lacus eu blandit consectetur. Aenean consectetur feugiat mauris, pulvinar aliquet elit iaculis id. Maecenas id interdum lectus. In pharetra diam non eros aliquet euismod. Sed eget dui eu massa rutrum suscipit at bibendum turpis. Nullam orci lorem, sodales a pellentesque quis, volutpat ut arcu. Proin eleifend, tortor id posuere blandit, nulla arcu blandit eros, vel ullamcorper odio sapien nec libero. Donec sed porttitor lectus. Phasellus ut est non risus volutpat facilisis. Proin non venenatis enim. Proin molestie porttitor viverra. Nunc eu nulla in massa pharetra ornare. Cras eget erat aliquet, accumsan eros ut, eleifend metus. Morbi eget faucibus tortor.`,
    `
    Mauris eu sollicitudin velit. In vitae nisi ut tortor pulvinar imperdiet vel vel ex. Duis vitae lorem ac eros pellentesque fringilla. Proin quis justo feugiat, ultricies metus eget, tempus nisi. Nulla a auctor turpis. Donec ultrices orci quam, tempor facilisis ante ornare blandit. Cras quis mattis sem.
    `,
    `Cras ut imperdiet arcu, sit amet interdum orci. Vestibulum at sapien tristique, consequat velit eget, imperdiet arcu. Morbi eu enim non purus auctor faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse porta viverra mauris, id pellentesque metus egestas a. Nunc vestibulum metus sapien, sed consectetur lorem tincidunt eu. In laoreet lectus vitae ipsum fermentum, id tincidunt risus tincidunt. Cras cursus laoreet pharetra. Nullam in augue suscipit felis dapibus semper eget sit amet libero. Nam eget sapien enim. Aliquam faucibus, arcu in ullamcorper vehicula, dui diam convallis eros, in malesuada mi orci non leo.
    `,
    `Mauris hendrerit blandit ante. Ut elementum augue feugiat libero pulvinar suscipit. Nullam porta metus eu tempus euismod. Vestibulum massa felis, tristique tincidunt est sit amet, cursus mollis nunc. Vestibulum eget purus consectetur justo efficitur bibendum a at nulla. Aliquam ultricies libero orci. Vivamus facilisis sem et lorem tempus, nec tincidunt ipsum varius. Mauris finibus metus in nibh consectetur cursus et tincidunt elit. Aliquam eget lacus ac sem interdum ullamcorper quis in arcu. Duis elementum urna non pretium pharetra. Duis convallis turpis diam, a pulvinar orci sollicitudin at.
    `,
    `Sed tempor ultricies odio et congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed cursus nunc. Etiam ac interdum leo. Quisque non justo quis arcu laoreet pharetra. Suspendisse potenti. Praesent rutrum, arcu a accumsan luctus, lacus ligula interdum elit, ac venenatis tellus nulla id sem.
    `,
    `Vivamus tempus blandit venenatis. In et ultricies orci. Donec blandit vel nunc semper convallis. Nunc ac tempus risus. Aenean dapibus vel velit vel accumsan. Donec ac mollis elit. Quisque quis ornare arcu.
    `,
    `Nullam dapibus nibh justo, et aliquam eros rhoncus non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio arcu, tempus in arcu in, fermentum ultricies orci. Ut et nibh ac elit tempor tincidunt. Maecenas sed enim eget lacus vulputate eleifend. Mauris sit amet venenatis turpis. Cras vel euismod ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In malesuada tristique odio sed porta. Fusce sed metus tristique, tincidunt nisl a, feugiat purus. Proin fringilla libero ac urna ultrices, a ultrices lacus elementum. Duis nec diam quis neque rutrum interdum. Quisque nec nisl tellus. Sed pretium laoreet vehicula. Aenean nulla magna, ultrices vitae ante ut, aliquet tincidunt ipsum.`


];

const form = document.querySelector('.lo');
const amount = document.getElementById('amount');
const result = document.querySelector('.lt');
form.addEventListener("submit",function (e){ e.preventDefault();
  const value = parseInt(amount.value);
  
  const random = Math.floor(Math.random() * text.length);
  if(isNaN(value) || value <= 0 || value > 9) {
        
    result.innerHTML = `<p class="result">${text[random]} </p>`;
  }
  else{
      let tem = text.slice(0,value);
      tem = tem.map(function(item){
     
         return `<p class="result">${item }</p>`

      })
    .join("");
    result.innerHTML= tem;
  }
});
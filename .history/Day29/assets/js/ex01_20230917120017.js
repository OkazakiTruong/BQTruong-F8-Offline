const autoIndex = function () {
  const moduldes = [...document.querySelectorAll(".list-item.active")];
  moduldes.forEach((modulde, index) => {
    console.log(modulde);
    const text = document.createTextNode(
      `Module : ${index} : ${modulde.innerText}`
    );
    modulde.append(text);
  });
};
autoIndex();

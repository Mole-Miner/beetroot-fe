const gridChildren = document.querySelectorAll(`.photography > section`);

for (const child of gridChildren) {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  child.style.backgroundColor = `#${color}`;
}
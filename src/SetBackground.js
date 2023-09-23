function changeBackground() {
  if (sessionStorage.getItem('colour')) {
    document.body.style.backgroundColor = sessionStorage.getItem('colour');
  } else {
    document.body.style.backgroundColor = "#BB0A21";
    sessionStorage.setItem('colour', "#BB0A21");
  }
}

export default changeBackground;
function get_lessons_titles() {
  var items_boxes = document.querySelectorAll(".items-boxes .subtitle");
  var html = ``;
  for (const [index, element] of items_boxes.entries()) {
    if (index < 7) {
      html += `<header id='${index + 1}' class="lessson-header"><h1>${index +
        1} - ${element.innerText}</h1>
  </header>`;
    }
  }
  html = html.replaceAll("\n", "");
  return html;
}

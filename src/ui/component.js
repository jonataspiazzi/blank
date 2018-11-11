
class Component {
  load() {
    throw 'This method needs to be overrited in derived classes';
  }

  loadComponentPart(name, onClick) {
    this[name] = document.getElementById(name);

    if (typeof onClick === 'function') {
      this[name].addEventListener('click', onClick);
    }
  }

  clearSelect(select) {
    while(select.options.length) {
      select.options[0] = null;
    }
  }

  addOption(select, key, value, selected) {
    const option = document.createElement('option');

    option.value = key;
    option.innerHTML = value;
    option.selected = !!selected;

    select.options[select.options.length] = option;
  }

  getSelectedKey(select) {
    return select.options[select.options.selectedIndex].value;
  }

  setSelectOption(select, key) {
    for (let i = 0; i < select.options.length; i++) {
      select.options[i].selected = 
        select.options[i].value == key;
    }
  }
}

export default Component;

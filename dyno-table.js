"use strict";

class DynoTable extends HTMLElement {
  construct(...args) {
    super();

    //this.getAttribute

    this.config = {
      paginated: true,
      itemsPerPage: 10,
      showingPages: 10,
      nextPageBtn: true,
      prevPageBtn: true,
    }

    this.table = {
      columns: [],
      data: [],
      state: {
        'loading': false
      },
      on: {
        load: null,
        loaded: null,
        render: null,
        rendered: null,
      },
      columnsSizes: []
    }

    return this;
  }

  setConfig(config = {}) {

  }

  async setColumns(columns) {

  }

  async setFromUrl(url, ...configs) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', url);

    xhr.addEventListener("load", e => {
      if (this.table.on.load != null && this.table.on.load instanceof Function)
        this.table.on.load();

    })
    //if()
  }

  async setData(data = []) {
    this.table.data = data
    return true;
  }

  async appendData(data = []) {
    this.table.data.push(data)
    return true;
  }

  Row() {

  }

  Col() {

  }

  async loadData() {


    for ([row, index] of this.table.data.entries()) {

    }
  }

  connectedCallback() {
    //console.log('Custom square element added to page.');
    //updateStyle(this);
  }

  disconnectedCallback() {
    //console.log('Custom square element removed from page.');
  }

  adoptedCallback() {
    //console.log('Custom square element moved to new page.');
  }

  attributeChangedCallback(name, oldValue, newValue) { }

  static get observedAttributes() {
    console.log('lalala')
    return ['c', 'l'];
  }

}

window.customElements.define('dyno-table', DynoTable);
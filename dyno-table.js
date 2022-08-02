"use strict";

class DynoTable extends HTMLElement {
  constructor(...args) {
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
        loading: false,
        rendering: false
      },
      on: {
        load: null,
        loaded: null,
        render: null,
        rendered: null,
      },
      columnsSizes: []
    }

    this.header = null;
    this.body = null;
    this.footer = null;

    return this;
  }

  setConfig(config = {}) {

  }

  async setColumns(columns) {

  }

  async setFromUrl(url, ...configs) {
    let xhr = new XMLHttpRequest();

    if (configs[0] && configs[0] instanceof Object) {
      console.log('configs')
    }

    xhr.open('POST', url);
    xhr.send();

    return new Promise((resolve, reject) => {

      xhr.addEventListener("load", e => {
        if (this.table.on.load != null && this.table.on.load instanceof Function)
          this.table.on.load();

      })

      xhr.addEventListener("loadend", e => {
        resolve(true)
      })
    })
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

  async constructTable() {
    this.header = document.createElement("dyno-header")
    this.body = document.createElement("dyno-body")
    this.footer = document.createElement("dyno-footer")

    this.loadingIndicator = document.createElement("dyno-loadingIndicator")
    this.loadingSpinner = document.createElement("dyno-loadingSpinner")

    this.appendChild(this.header)
    this.appendChild(this.body)
    this.appendChild(this.footer)

  }

  async loadData() {


    for ([row, index] of this.table.data.entries()) {

    }
  }

  connectedCallback() {
    //console.log('Custom square element added to page.');
    //updateStyle(this);

    this.constructTable();
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
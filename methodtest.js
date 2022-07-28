/**
 * @typedef {Object} Article
 * @property {number} id
 * @property {string} article_name
 * @property {string} article_body
 * @property {Date} article_date
 */

/** @type {HTMLFormElement} */
const form = document.querySelector("form#form");
/** @type {HTMLButtonElement} */
const deleteBtn = document.getElementById("deleteBtn");
/** @type {HTMLOutputElement} */
const output = document.getElementById("response");

const showOutput = (object) => {
  output.innerHTML = `<pre>${JSON.stringify(object, null, 2)}</pre>`;
};

const triggerGet = async () => {
  const res = await fetch("https://httpbin.org/get");
  const json = await res.json();
  showOutput(json);
};

/** @param {Article} data */
const triggerPost = async (data) => {
  const res = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const json = await res.json();
  showOutput(json);
};

/** @param {Article} data */
const triggerPut = async (data) => {
  const res = await fetch("https://httpbin.org/put", {
    method: "PUT",
    body: JSON.stringify(data),
  });
  const json = await res.json();
  showOutput(json);
};

/** @param {Article} data */
const triggerDelete = async (data) => {
  const res = await fetch("https://httpbin.org/delete", {
    method: "DELETE",
    body: JSON.stringify(data),
  });
  const json = await res.json();
  showOutput(json);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  /** @type Article */
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  data.article_date = new Date();

  /** @type {'post' | 'get' | 'put' | 'delete'} */
  const submitType = e.submitter.value;

  switch (submitType) {
    case "get":
      triggerGet();
      break;
    case "post":
      triggerPost(data);
      break;
    case "put":
      triggerPut(data);
      break;
    case "delete":
      triggerDelete(data);
      break;
  }
});

/** @jsx h */

function h(type, props, ...children){
  return {type, props, children}
}

function createVirtualElement(node){
  if(typeof node == 'string'){
    return document.createTextNode(node);
  }
  
  if(typeof node.type == "function"){
    return createVirtualElement(node.type())
  }
  
  const $el = document.createElement(node.type);
  node.children
        .map(createVirtualElement)
        .forEach($el.appendChild.bind($el));
  return $el;
}

const Form = () => {
  return (
    <div class="form">
        <input type = "text" onClick="teste" />
    </div>
  );
};

const app = (
  <div class="asds">
    <Form />
    
    <ul>
      <li>asd</li>
    </ul>
  </div>
);


const $root = document.querySelector('#my-app');
$root.appendChild(createVirtualElement(app));

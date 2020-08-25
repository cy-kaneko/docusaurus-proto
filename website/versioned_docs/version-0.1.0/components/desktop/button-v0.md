---
id: version-0.1.0-button-v0
title: Button v0
sidebar_label: Button v0
original_id: button-v0
---

## Overview

## Constructor
**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.text|String|No|Text will be displayed in button.|
|options.type|String|No|Style of the button: <ul><li> 'normal' </li><li> 'submit' </li></ul> Default value: 'normal'|
|options.isDisabled|Boolean|No|The button will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The button will be visible. <br>  Default value: 'true'|

<details class="tab-container" open>
<Summary>View source</Summary>

**Javascript**
```javascript
var button = new kintoneUIComponent.Button({
    text: 'Submit',
    type: 'submit'
});
```
</details>

## Methods
### render()
Get dom element of component.

**Parameter**

None

**Returns**

DOM element

<details class="tab-container">
<Summary>View source</Summary>

**Javascript**
```javascript sandbox_kuc-button-js-m4ox583098
var button = new kintoneUIComponent.Button({
    text: 'Submit', 
    type: "submit"
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(button.render());
```
</details>

```KUCComponentRenderer {"id":"btn_render"}
var component = new kintoneUIComponent.Button({
    text: 'Submit',
    type: 'submit'
});
```
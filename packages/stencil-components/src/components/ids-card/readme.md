# ids-card

Generates the Card component. 

Styles are presented via the Tailwind Plugins for Interstate Styles.

## Examples

### Card with text
Children within the body of the component are displayed in the `card-body` class.

```
  <ids-card>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia,
    ex a ullamcorper sagittis, massa nisl maximus felis, ac pretium urna ex
    sit amet arcu.
  </ids-card>
```

### Card with props

Header (title text) and Media are optional props that can be used to minimize the number of children.
They will render in their respective elements within the component.

```
  <ids-card header="Card Title" media="/some/media/asset.jpg">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia,
    ex a ullamcorper sagittis, massa nisl maximus felis, ac pretium urna ex
    sit amet arcu.
  </ids-card>
```


### Card with slots

Slots allow for more complex elements to be used.
It is important to use the proper class name and slot name when specifying the custom elements.
Footers must always be provided via the `card-footer` slot.

```
  <ids-card header="Card Title" media="/some/media/asset.jpg">
    <div class="card-media" slot="card-media">
      <picture>
        <img src="/some/media/asset.jpg" alt="Some Media" />
      </picture>
    </div>
    <div class="card-title" slot="card-title">
      Card <em>Title</em>
    </div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia,
    ex a ullamcorper sagittis, massa nisl maximus felis, ac pretium urna ex
    sit amet arcu.
    <div class="card-footer" slot="card-footer">
      <a href="/footer-link.html">Link</a>
    </div>
  </ids-card>
```


<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                              | Type      | Default     |
| ------------ | ------------ | ---------------------------------------------------------------------------------------- | --------- | ----------- |
| `header`     | `header`     | (optional) the title text of the card. if using this, do not use the `card-title` slot   | `string`  | `undefined` |
| `horizontal` | `horizontal` | (optional) denotes if the component is to be displayed horizontally                      | `boolean` | `undefined` |
| `media`      | `media`      | (optional) the media source of the card. if using this, do not use the `card-media` slot | `string`  | `undefined` |


----------------------------------------------

Created with ♥ for the Interstate Design System.

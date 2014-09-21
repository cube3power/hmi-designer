usemockups.models.Document = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage('documents'),
    defaults: {
        "mockups": [
  {
    "top": 39,
    "left": 43,
    "z_index": 0,
    "tool": "range_gauge",
    "width": 250,
    "height": 100,
    "color": "#dedede",
    "border": true
  },
  {
    "top": 373,
    "left": 26,
    "z_index": 0,
    "tool": "range_indicator",
    "width": 97,
    "height": 161,
    "color": "#dedede",
    "border": true
  },
  {
    "top": 391,
    "left": 159,
    "z_index": 0,
    "tool": "checkbox",
    "checked": true,
    "text": "Label"
  },
  {
    "top": 432,
    "left": 155,
    "z_index": 0,
    "tool": "radio",
    "checked": true,
    "text": "Label"
  }
],
        "width": 480,
        "height": 800
    },
    initialize: function () {
        this.mockups = new usemockups.collections.Mockups;
        this.mockups.on("add remove persist", this.persist, this);
    },
    persist: function () {
        this.set("mockups", this.mockups.toJSON());
        this.save();
    },
    parse: function (result) {
        if (this.mockups && !this.mockups.length)
            this.mockups.reset(result.mockups);
        return result;
    }

});

usemockups.collections.Documents = Backbone.Collection.extend({
    model: usemockups.models.Document,
    localStorage: new Backbone.LocalStorage('documents')

});

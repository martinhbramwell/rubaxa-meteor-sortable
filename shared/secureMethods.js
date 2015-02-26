Meteor.methods({
  insertAttribute: function (text_) {
    Attributes.insert({
          name: text_,
          type: 'String',
          order: 0
    });
  },
  updateAttribute: function (id, text) {
      Attributes.update(id_, {$set: {name: text_}});
  }
});

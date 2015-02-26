Meteor.methods({
  insertAttribute: function (text_) {
    Attributes.insert({
          name: text_,
          type: 'String',
          order: 0
    });
  },
  updateAttribute: function (idObj, text) {
      Attributes.update(idObj, {$set: {name: text}});
  }
});

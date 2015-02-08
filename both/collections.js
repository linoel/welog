
Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  body: {
    type: String,
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  published: {
    type: Boolean,
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },
  time:{
    type: Date,
      autoValue: function() {
        return new Date;
      }
<<<<<<< HEAD
=======

  },
  authorId:{
    type: String,
    optional:true  //Finally we have to remove this line when we ask users to login to post blog.
>>>>>>> post_view
  }
}));

export default function(eventLike = [], action) {
  if (action.type === 'eventLiked') {
    var eventLikeCopy = [...eventLike]
    if(action.eventLike.like){
      console.log(action.eventLike)
      eventLikeCopy.push(action.eventLike)
      return eventLikeCopy;
    } else {
      for (e of eventLikeCopy) {
        if (e.artist == action.eventLike.artist) {
          var index = eventLikeCopy.indexOf(e)
          eventLikeCopy.splice(index, 1)
          console.log(eventLikeCopy);
          return eventLikeCopy;
        }
      }
      return eventLikeCopy;
    }
  };
  return eventLike;
};

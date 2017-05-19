var friendList = require('../data/friends');


module.exports = function(app) {
    //apiRoutes.js
    //Routes the server recieve from user
    app.get("/api/friends", function(req, res) {
        res.json(friendList);
        console.log("user get friends api");
    });

    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;
        console.log(newFriend);
        var newFriendScore = 0;

        //NewFriend total score
        for (var i = 0; i < newFriend.scores.length; i++) {
            newFriendScore += parseInt(newFriend.scores[i]);
        }

        var friendListScore = 0;
        //set a temp score
        var difference;
        //total from 10-50, this is a reference for best match
        //reassign value when difference value is smaller
        var compatibility = 51;
        var matchedFriend;
        //Loop on each friend
        for (var i = 0; i < friendList.length; i++) {
            //this friendList[i] total score
            for (var j = 0; j < friendList[i].scores.length; j++) {
                friendListScore += parseInt(friendList[i].scores[j]);
            }
            console.log(newFriendScore, friendListScore);

            difference = Math.abs(newFriendScore - friendListScore);
            console.log(difference);
            //need the lowest difference to return a friend object
            if (compatibility > difference) {
                compatibility = difference;

                matchedFriend = friendList[i];
                console.log("matchedFriend is "+matchedFriend.name);
            }
            friendListScore=0;
        }

        friendList.push(newFriend);


        //this returns to the front end, for data
        res.json(matchedFriend);
        console.log("New Friend added");
    });


};

# CodePathProjectOne
## Unit 1 Assignment: Music Playlist Explorer

Submitted by: **Nicholas Matias**

Estimated time spent: **35** hours spent in total


### Application Features

#### CORE FEATURES

- [x] **Display Playlists**
    - [x] Dynamically render playlists on the homepage using JavaScript.
    - [x] Fetch data from a provided JSON file and use it to create interactive playlist tiles.
    - [x] Each title should display the playlist's cover image, name, creator, and like count.

- [x] **Playlist Details**
    - [x] Create a modal view that displays detailed information about a playlist when a user clicks on a playlist tile.
    - [x] The modal should show the playlist's cover image, name, creator, and a list of songs, including their titles, artists, and durations.

- [x] **Like Playlists**
    - [x] Implement functionality to allow users to like playlists by clicking a heart icon on each playlist tile.
    - [x] Update the like count on the playlist tile when a playlist is liked or unliked.

- [x] **Shuffle Songs**
    - [x] Enable users to shuffle the songs within a playlist using a shuffle button in the playlist detail modal.
    - [x] Rearrange the songs in the modal view when the shuffle button is clicked.
#### STRETCH FEATURES

- [ ] **Add New Playlists** (was very close to finishing)
    - [ ] Allow users to create new playlists.
    - [ ] Users can input playlist name, creator, and add multiple songs with details like title, artist, and duration.

- [ ] **Edit Existing Playlists**
    - [ ] Enable users to modify the details of existing playlists.
    - [ ] Add an edit button to each playlist tile.
    - [ ] Users can update the name, creator, and songs of the playlist.

- [ ] **Delete Playlists**
    - [ ] Add a delete button to each playlist tile.
    - [ ]When clicked, the playlist is removed from the display and data model.

- [ ] **Search Functionality**
    - [ ] Implement a search bar that allows users to filter playlists by name or creator.

- [ ] **Sorting Options**
    - [ ] Implement a dropdown or button options that allow users to sort the playlist by name, number of likes, or date added.

### Walkthrough Video

<div>
    <a href="https://www.loom.com/share/af38e7b3c2794ccf89f51cbfee616ce3">
      <p>Music Playlist Explorer - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/af38e7b3c2794ccf89f51cbfee616ce3">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/af38e7b3c2794ccf89f51cbfee616ce3-with-play.gif">
    </a>
  </div>

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

        The topics themselves were relevant to this week's project but the way the information was presented wasn't the best. This is especially true for the beginning of the week. I felt unprepared to populate the playlist cards and their respective songs until we finally got a demo. This demo was outside of the pre-planned codepath curriculum. In general, the slides were very surface level and often didn't cover how to apply the topics, merely explaining what they are. Additionally, the lectures were very unorganized a majority of the time. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
        Looking back, I would likely invest in a general modal model. Currently, I have a template modal that creates a new modal for each playlist with a unique id. It would probably be better to have one modal that populates the respective playlist information when the playlist card is clicked.

        Another thing I would do differently is prioritize the project at the beginning of the week more. During the beginning of the week, I focused on doing the labs and they were helpful to an extent but I think focusing on the project earlier would have been more beneficial than solely doing the labs. 

        Additionally, I realized that taking breaks is important. On Tuesday, Wednesday, and the majority of Thursday it was a little rough. I would run into a dead end and ask for help but the codepath instructors sometimes didn't know how to help me. This would result in me spending a long period of time trying to find a small mistake in my code, thus resulting in me fatiguing mentally. That said, later in the day on Thursday and all of Friday, I started to take a small break whenever I got stuck. Following the break, more often than not I was able to find the error on my own. In the future, I intend to continue taking a small break when I get stuck as it seems to help me a lot.

        In terms of features, I feel I could have finished all of the stretch features given one or two more days. I had started on the add playlist feature and was very close to finishing it. There is a branch open in the repository dedicated to implementing the add playlist feature. I had created the modal and the html form; it was just a matter of linking the modal to the container with onclick in its tag.

        Lastly, I would focus more on the functionality of the features rather than the CSS.


* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?


        I did not demo this week in person as each person will only demo one of their three CodePath projects. I did notice that Zara had a great slide presentation; I think making a slide presentation for the live demo could be a good idea for me as well.



### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Sammy was very helpful and was able to guide me in the right direction a majority of the time.
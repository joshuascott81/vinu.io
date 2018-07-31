const requireLogin = require('../middleware/requireLogin');

// @route GET api/profile
// @desc Get current user's profile
// @access Private
module.exports = app => {
  app.get('/api/profile', (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noProfile = 'There is no profile for this user';
          res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  });

  // @route GET api/profile
  // @desc Create or edit current user's profile
  // @access Private
  app.post('/api/profile', (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check validation
    if (!isValid) {
      // Return any errors
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.brandName) profileFields.brandName = req.body.brandName;
    console.log(req.body.websites);
    if (typeof req.body.websites !== 'undefined')
      profileFields.websites = req.body.websites.split(',');
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.youtubeUrl) profileFields.youtubeUrl = req.body.youtubeUrl;
    if (req.body.vimeoUrl) profileFields.vimeoUrl = req.body.vimeoUrl;
    if (req.body.facebookUrl) profileFields.facebookUrl = req.body.facebookUrl;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        // Create

        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save Profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  });
};

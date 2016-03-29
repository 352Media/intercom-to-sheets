# Intercom to Google Sheets
The easiest way to track changes in your Intercom segments over time - contained entirely in Google Sheets.

## Two Options for Setting Up: Duplicate or Start Fresh
#### Duplicate

1. Duplicate this Google Sheet - https://docs.google.com/a/352inc.com/spreadsheets/d/12Tm8twRg67DtDxn7oyAiziLuyTiWSsgOeZAu8TKiCvo/edit?usp=sharing

2. This sheet has demo information to show you how how the "Controls" sheet works and how data is displayed on "Table". On "Controls" you can select your segments – it currently defaults to 10, but you can use more or less – and for the number of days you'd like displayed.

3. When you're ready, you can delete everything but the header row on "RAW - API Import". This will stop this data from showing in "Controls" and "Table".

4. Inside the Google Sheet Script Editor, paste in your Sheet Key at line 54 - http://352.fm/whatismygooglesheetkey.

5. Set the "App ID" and "API Key" to the values from your Intercom account in Project properties > Script Properties. (*Don't worry, we can't see this. It's private to your Google account. And you'll probably want to use a read-only API key anyway.*)

6. In the toolbar of Script Editor, select "importUserSegmentCount" and run it once. You'll be asked for your permission to run the app.

7. Verify that the sheet "RAW - API Import" has your data now recorded to it.

8. In Resources > Current project's triggers, click the link "No triggers set up. Click here to add one now". This project was set up to run daily, but can run more or less frequently depending on your preference.

#### Start Fresh
1. Create a new Google Sheet.

2. Name the first sheet "RAW - API Import".

3. Copy the JavaScript code into the new sheet's "Script Editor".

4. Paste in the Google Sheet Key in line 54 - http://352.fm/whatismygooglesheetkey.

5. Set the "App ID" and "API Key" from your Intercom account in Project properties > Script Properties.

6. In the toolbar of Script Editor, select "importUserSegmentCount" and run it once. You'll be asked for your permission to run the app.

7. Verify that the sheet "RAW - API Import" has your data now recorded to it.

8. In Resources > Current project's triggers, click the link "No triggers set up. Click here to add one now". This project was set up to run daily, but can run more or less frequently depending on your preference.


## License
Licensed under the MIT and GPL-3 licenses.
tl;dr - Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software. Any modifications to the code must also be made available under these same licenses.

## Changelog
1.0 (February 29, 2016) Initial Release

## Contact
If you have any questions, reach out to hello@352inc.com.

## Contributing to the Project
Bug reports and code contributions are welcome! There are just a few requested guidelines:

Please create a feature branch for your changes and squash commits
Don't worry about updating the version, changelog, or minified version (We can take care of that)
Please respect the original syntax/formatting stuff
If proposing a new feature, it may be a good idea to create an issue first to discuss

## Acknowledgements
Created by the Product Growth Team at https://www.352inc.com
Team Silver (@damionwasylow, @latrointhemist, and @russebp)

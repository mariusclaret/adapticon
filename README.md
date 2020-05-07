# Adapticon

The app icon is one of the most important assets of an app and therefore it is key to make it look perfect on any device. Adaptive Icons make that possible and also allow you to add a nice little extra touch to your app.

Adaptive Icons are intended to make all icons on a device look coherent and still allowing customization by applying different masks. I designed and developed this web tool to support other designers in creating and debugging their icons.

**Try it out: [https://adapticon.mariusclaret.com](https://adapticon.mariusclaret.com)**

![Adaptive Icons Demo Gif](https://i.imgur.com/1NCSObR.gif)

## Technical Description

### View Framework
- Adapticon is built using only HTML, JavaScript and CSS, and is not making use of a framework.
- The source code is lightweight and the page loads very fast (even on a flaky connection).
- It uses new web capabilities and can be labeled as Progressive Web App.

### API Technology
- The Web App Manifest provides basic information about the PWA (icons, name, description etc.) and gives the user the option to install the app on his device. It makes it easier to access it if he is frequently using it.
- A Service Worker caches all static files and allows the website to work offline.
- If the user wants to insert his own custom icon, he can browse his device for the image file or just drag and drop it into the window. The file is then uploaded to Imgur via the [Imgur API](https://apidocs.imgur.com/?version=latest). Then, the user can easily share the icon or access it again at a later time.

### Authentication Strategy
- The website can be used in its entirety without any authentication from the user's side.
- The Imgur API requires to create a Client ID and to send it as authorization header when interacting with an endpoint.

### State Management
- Changing the displayed icon results in a URL hash change (for example: ```/#/bg=https://i.imgur.com/Mn5hNFP.png/fg=https://i.imgur.com/rdWZQj8.png```) and is shareable and is restored on a page refresh.
- The selected mask and settings (ghost, grid, shrink) are stored in local storage and are restored on a page refresh.

### Styling
- Uses CSS custom properties to simplify styling and style changes.
- Supports dark and light mode through CSS ```prefers-color-scheme``` media feature.
- Supports all kind of screen sizes through CSS breakpoints.

### Testing
- Tested and works well in all major browsers: Chrome, Safari, Firefox, Edge, Opera.

### Security
- The website is served over HTTPS, image uploads are encrypted as well.
- It doesn't collect or store any sensible information about the user.

### Production Setup and Deployment
- The project is hosted at https://adapticon.mariusclaret.com.
- Static files are hosted and served via [Firebase Hosting](https://firebase.google.com/docs/hosting).
- Uses [Fathom](https://usefathom.com) for anonymous and privacy-focused analytics.


## File Structure

- Adapticon Logo: [background.png](background.png), foreground.png
- Icons: 3x clear icons (default), 2x maskable icons (for Android), 1x solid icon (for Apple platforms)
- Website: index.html, style.css, script.js
- Example Collection: icons.json
- Web App Manifest: manifest.json
- Service Worker: worker.js


## Examples by [Cristian Ruiz](https://twitter.com/razgriz94)

- [1Password](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/3ebsVcl.png/fg=https://i.imgur.com/y1Tf4cI.png)
- [Allo](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/sYQAZ2n.png/fg=https://i.imgur.com/848hNWq.png)
- [Amazon](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/afWBHRK.png/fg=https://i.imgur.com/IlJ23bx.png)
- [Analytics](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/MxeQtFR.png/fg=https://i.imgur.com/1KlOVri.png)
- [Android Auto](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/BWcurBg.png/fg=https://i.imgur.com/9QGWfKW.png)
- [Android TV](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/tgVDPju.png/fg=https://i.imgur.com/k8AUwtE.png)
- [Android Wear](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/Y2t2u4D.png/fg=https://i.imgur.com/XL2kmSC.png)
- [Audible](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/1nA2vM1.png/fg=https://i.imgur.com/4vCCazm.png)
- [Bank of America](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/2iLgPyf.png/fg=https://i.imgur.com/SND1akf.png)
- [Calendar](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/VtPCqAP.png/fg=https://i.imgur.com/tAkan1R.png)
- [Camera](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/wS0CDdJ.png/fg=https://i.imgur.com/mgqgRdL.png)
- [Capital One](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/2Xm8Kux.png/fg=https://i.imgur.com/4CWr2Wh.png)
- [Chase](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/c4TRGdE.png/fg=https://i.imgur.com/d1QAw2r.png)
- [Comixology](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/SbabKXG.png/fg=https://i.imgur.com/KETe10p.png)
- [Dashlane](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/WrQXZkJ.png/fg=https://i.imgur.com/p6ffqzM.png)
- [Dropbox](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/9Xp3xdL.png/fg=https://i.imgur.com/rLtlKRJ.png)
- [Duo](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/ET8WqDt.png/fg=https://i.imgur.com/2NjNpDj.png)
- [Evernote](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/7eXDCi4.png/fg=https://i.imgur.com/uBnxkhh.png)
- [Facebook](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/JkY3gGq.png/fg=https://i.imgur.com/DTMRoDL.png)
- [Fandango](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/h37BE7b.png/fg=https://i.imgur.com/Vu9JflT.png)
- [Gmail](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/xH8giB9.png/fg=https://i.imgur.com/UrC5BGA.png)
- [Hangouts](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/iB4ReNR.png/fg=https://i.imgur.com/tZNFhzm.png)
- [Hulu](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/dQkVgXE.png/fg=https://i.imgur.com/1iSdJy3.png)
- [IFTTT](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/5FxPMfM.png/fg=https://i.imgur.com/0AK2ZKd.png)
- [Inbox](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/3TQuRfQ.png/fg=https://i.imgur.com/H24K8U9.png)
- [Instagram](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/HT4uj1f.png/fg=https://i.imgur.com/P3aoVI3.png)
- [Keep](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/utYY1wR.png/fg=https://i.imgur.com/hgvNxGB.png)
- [Kik](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/Rjf0KOi.png/fg=https://i.imgur.com/s9uqPS7.png)
- [Kindle](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/EoYZL6e.png/fg=https://i.imgur.com/GdWOFZU.png)
- [LastPass](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/OTqwHCc.png/fg=https://i.imgur.com/HSrlfqH.png)
- [Lifx](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/gx30bO4.png/fg=https://i.imgur.com/iyXdeX8.png)
- [LinkedIn](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/xxk4MtC.png/fg=https://i.imgur.com/ggu7MkX.png)
- [Lyft](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/KUCUCkE.png/fg=https://i.imgur.com/IRLP5Hf.png)
- [Messenger](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/allNHM7.png/fg=https://i.imgur.com/Y7fpThf.png)
- [Nest](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/F3z0YCM.png/fg=https://i.imgur.com/Pl79UJt.png)
- [Netflix](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/qBRxIdj.png/fg=https://i.imgur.com/97vSLYp.png)
- [Play Books](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/HVO2VRi.png/fg=https://i.imgur.com/aMjcMwd.png)
- [Play Dev Console](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/lUBXf1K.png/fg=https://i.imgur.com/0NeSmii.png)
- [Play Games](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/qlugh7Y.png/fg=https://i.imgur.com/u4mXnWr.png)
- [Play Movies](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/16UDXEW.png/fg=https://i.imgur.com/beWoJuy.png)
- [Play Music](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/30tX7lI.png/fg=https://i.imgur.com/M8FksEJ.png)
- [Play Newsstand](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/ZtKUoVC.png/fg=https://i.imgur.com/4fIhxto.png)
- [PlayStation](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/xqNSx0b.png/fg=https://i.imgur.com/gsakVnj.png)
- [Pocket](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/GW5t5hl.png/fg=https://i.imgur.com/vtPy61m.png)
- [Pocket Casts](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/kk9lOl3.png/fg=https://i.imgur.com/aXhMb1Y.png)
- [Slack](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/iqGpQCh.png/fg=https://i.imgur.com/jceH9gr.png)
- [Snapchat](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/mHImX8o.png/fg=https://i.imgur.com/423I5LZ.png)
- [Snapseed](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/4eK9qQt.png/fg=https://i.imgur.com/Lel2WGg.png)
- [Spotify](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/5EW3oEt.png/fg=https://i.imgur.com/GtwjYvU.png)
- [Starbucks](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/elzMa8W.png/fg=https://i.imgur.com/arnCc4k.png)
- [Steam](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/e4tLGWv.png/fg=https://i.imgur.com/KGJOPND.png)
- [Switch Online](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/Y5CYQMj.png/fg=https://i.imgur.com/ieSbH8q.png)
- [Trello](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/CD4Jf8n.png/fg=https://i.imgur.com/1aujGUf.png)
- [Twitch](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/zMDV1qM.png/fg=https://i.imgur.com/d3aebWj.png)
- [Twitter](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/mB3kBWf.png/fg=https://i.imgur.com/Js40f4a.png)
- [Uber](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/D6arBsk.png/fg=https://i.imgur.com/C1D2yFl.png)
- [Wells Fargo](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/AJ3vkUG.png/fg=https://i.imgur.com/8icAsQ6.png)
- [Xbox](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/8fDdXF0.png/fg=https://i.imgur.com/6CGPfDF.png)
- [YouTube](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/MxLNcXK.png/fg=https://i.imgur.com/reUWG8i.png)
- [YouTube Gaming](https://adapticon.mariusclaret.com/#/bg=https://i.imgur.com/ULAAwhP.png/fg=https://i.imgur.com/rWD90Bi.png)

## Reference

- [Official documentation](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive.html)
- [Understanding Adaptive Icons](https://medium.com/google-design/understanding-android-adaptive-icons-cee8a9de93e2)
- [Designing Adaptive Icons](https://medium.com/google-design/designing-adaptive-icons-515af294c783)
- [Implementing Adaptive Icons](https://medium.com/google-developers/implementing-adaptive-icons-1e4d1795470e)

## Author

Marius Claret | [@mariusclaret](https://twitter.com/mariusclaret) | https://mariusclaret.com

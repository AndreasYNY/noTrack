# NoTrack
Simple Firefox extension for escaping google's tracker.  Inspired by Undirect.

## How does this work?
Google hides redirect url before you click any link. So you could inspect the link in the bottom corner.  
### Before you click:  
![before](https://i.imgur.com/4CAUpdF.png)  
### after you click:  
![after](https://i.imgur.com/1jJ396r.png)

  
Now what NoTrack do is swap the original anchor tag with a new one without any attributes but `href`, so Google couldn't change the url.

## Installing
WIP

## Todo
- Change how the Script work:
    - instead of swaping the anchor link, it's better to disable the function instead of swapping the anchor tag.

## Acknowledgement
Yes i know this is a futile attempt to escape google's tracker, but at the very least google can't see where are you going...for now at least.  
**Please use alternative search engines like startpage or DuckDuckGo**  
it's more secure and it respect your privacy.
  
Made this at 3AM within 20 minutes.
## Thanks
- [Undirect](https://github.com/xwipeoutx/undirect), for the inspiration.
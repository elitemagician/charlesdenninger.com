# charlesdenninger.com


Personal bio site!

The goal of this project is for it to be a living document so-to-speak, that I can showcase some different skillsets off with utilizing different frontend/backend skills. It is also somewhat of a hobby and fun to do in my spare time, as I like to stay sharp in the tech game. 

Ofcourse as this project progresses, I will make a better formatted README, but for now, this will suffice.

A little background of my local developer env.

I have the local code saved on a onedrive (mscloud) so I can do my local dev work from any device at any time on any IDE. My thought was that this project could be done at any time, and at any place, so I wanted to make it as agile as possible, while ofcourse being as secure as possible. 

I currently host my domain through AWS route 53. I have created my own hosted zone and S3 bucket for the website and its associated alias (charlesdenninger.com/www.charlesdenninger.com). I have then went ahead and created a CDN (content delivery network) using edge locations for best possible performance. There are some more behind the scenes stuff that had to be done, such as creating A records etc, but I wanted to just give a high level overview of my architecture. I will dig deeper at a later date.

Moving on..

Any work I do locally gets pushed to my "local" (stay with me here) cloud drive where I use the standard GIT CLI tools to push the code into the Github repository. (which as of today is public). Once that takes place I have a webhook into AWS using AWS code pipeline to automate a deploy to the S3 bucket with the git changes I have pushed into the repositories "master" branch. Changes normally take about 1-2 minutes to show up on the site give or take.



This is my current development and release process in in infacy stages. 





My own scratchpad:

Some Git tips  For when I forget -- since Im too lazy to setup a bash profile :)~

Create a new branch:  git checkout -b [name_of_your_new_branch]

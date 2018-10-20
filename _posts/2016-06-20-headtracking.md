---
layout: post
title:  "DIY head tracking"
date:   2016-06-20
excerpt: "DIY head tracking for use in simulators"
project: true
tags: [head tracking, tracking, hardware, software, dcs, il2]
---

This is my ugly but functional trackhat for use with a head tracking software such as [opentrack](https://github.com/opentrack/opentrack). For this type of solution (infra-red LED) a webcam is also required.

<figure class="half">
	<img src="https://i.imgur.com/bvKOltB.jpg">
    <img src="https://i.imgur.com/Kh9plGI.jpg">
    <figcaption>Ugly and sloppy DIY trackhat and its companion modded webcam</figcaption>
</figure>

## Head Tracking

If you don't play in VR, head tracking is an almost essential requirement for the serious flight simulator player. It also works with many racing sims as well as a few other games (e.g. ArmA), although I have only used it in flight sims.

Head tracking has some software which monitors your head's position and then communicates with the game which then changes your view according to your head's movements.

## Different head tracking systems

A brief overview of the most commonly used head tracking methods.

### Face tracking

[Face tracking](http://facetracknoir.sourceforge.net/home/default.htm) brings you the advantages of head tracking with the sole requirement of a webcam. No other hardware is required since the software will analyse the webcam's image to determine your face's position.

This was the first system I used, and just for a couple of days. At the time I did not find it very precise and it requires a lot more processing power than most of the other methods.

### IR tracking

IR tracking requires a webcam and either a clip or hat with IR LEDs. If you are doing a DIY project, do note that it is possible to use regular LEDs instead of IR LEDs, but by doing so your system will be much more susceptible to room lighting conditions than when using IR LEDs and a webcam. 

My first version of the trackhat was with regular LEDs and it did work, but I would not recommend it.

#### DIY IR tracking

If you have
* basic electrical knowledge (DC, low current)
* soldering iron
* webcam
you can choose the DIY route if you do not wish to spend much money. My current webcam was the cheapest I could find at the time, and I find it works perfectly fine.

For optimal results you'll want to use IR LEDs and a webcam with its IR filter removed. You'll probably also need to add something that blocks visible light, in my case I used old photo negatives. 

If you do not already own a webcam, then it is probably easier and cheaper to just buy one of the ready-made solutions below.

After having the hardware working, it is necessary to setup the software to your liking. This can be a morose process of trial and error. There are guides and videos about setting up opentrack, they can help you speed up the process.

#### Trackhat

[Trackhat](https://trackhat.org/trackhat/) is a ready made IR hat. You can buy just the hat or hat + PS3 Eye camera with IR filter already removed.

#### Delan Clip

[Delan Clip](https://delanengineering.com/products/) is a ready made IR clip. You can buy just the clip or a set which includes clip + PS3 Eye camera with IR filter already removed.

#### TrackIR

[TrackIR](https://www.naturalpoint.com/trackir/trackir5/) is a ready made solution with its own proprietary software. For those wanting to do minimal setup or tuning, this is the solution, however it is much more expensive.

### Gyroscopes

Gyroscopes are another solution for head tracking with the advantage that they do not require a webcam. 

#### EDTracker
[EDTracker](http://www.edtracker.co.uk/shop) has ready made solutions that should work with minimal setup.

#### Old mobile phone
If you have an old android mobile phone you can use it with [opentrack](https://github.com/opentrack/opentrack/wiki/Smartphone-Headtracking) to provide you with webcam-less head tracking. You'll just need to install an android program that captures your movements using the phone's sensors and sends them to opentrack on your PC.

## Additional resources

You can find an excellent overview of headtracking and how to setup opentrack in the [IL-2 forums](https://forum.il2sturmovik.com/topic/34403-a-complete-guide-to-set-up-head-tracking-opentrack/)
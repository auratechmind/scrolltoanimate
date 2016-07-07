# SCROLLTOANIMATE
  A simple jquery for animate when you scroll
  
## Features
  - Animate elements, images, etc.
  - Set animation duration. 
  - Set animation delay
  - Easy to use.
  - Use Animate.css

## Installation
1. ADD animate.css in Header

2. ADD scroll-animate.js in Footer
  
3. First add animate-box Class (.animate-box) in Main div OR Parent div.
   
    ```
    <div class="animate-box">
		<div class="detail-section"> 
		...
		</div>
	</div>
   ```
    
4. To Add Animation on Element Add animated class (.animated) in that particular element

	 ```
    <div class="target">
		<div class="detail-section animated"> 
		...
		</div>
	</div>
   ```
   
5. Now, Add Effect on that element which you want to add.Different animation style are listed in animate-effects.txt file. 

   ```
    <div class="target">
		<div class="detail-section animated" animate="bounce"> 
		...
		</div>
	</div>
   ```
   
   
6. You Can also Set Animation Duration & Delay like below Example(OPTIONAL):
	
	```
    <div class="target">
		<div class="detail-section animated" animate="bounce" duration="2s" delay="1.2s"> 
		...
		</div>
	</div>
   ```

Now, When Parent Div OR Main Div is visible on screen the element is Animated.

## Demo
http://plugins.auratechmind.net/scrolltoanimate

## Discussion
http://auratechmind.net/question/category/scrolltoanimate

## Credit
https://daneden.github.io/animate.css/



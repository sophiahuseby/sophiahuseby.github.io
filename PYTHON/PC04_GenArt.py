#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Dec  1 22:42:00 2021

@author: Ian Rowland and Sophia Huseby

Snowflake Array is a generative art piece that is inspired by the randomization and uniqueness of each
snowflake in nature. We wanted to experiment with the idea of randomizing different aspects of a snowflake,
such as placement and color, rather than in the structure. With this art piece, you can create a colorful 
display of different snowflakes by choosing which structure and which placement you would like. 

There are five different shapes that are controlled by the keys '1','2','3','4', and '5' and eight different
areas where you can display the snowflakes. The top areas are controlled by 'q','w','e', and 'r' while the bottom
is by 'a','s','d', and 'f'.
When you are done, or would like to start over, you are able to press the space bar which resets the panel.
"""

import random, turtle #import the libraries of commands that are used later

turtle.colormode(255) # sets which RGB values can be used
turtle.tracer(0) # turns off animation

#===============================
class managerArt(turtle.Turtle): # class managerArt sets up the panel
    def __init__(self):
        super().__init__()
        self.panel = turtle.Screen().bgcolor('black') # sets background color to black
        self.w = 800 # width is 800 pixels
        self.h = 400 # height is 400 pixels
        
  
class snowflake(turtle.Turtle): # class snowflake sets up each snowflake
    def __init__(self):
        super().__init__()
        
        self.running = True
        
        
        # below are a list of color palettes that are randomized each time a shape is clicked
        self.diamondList = [(156, 211, 217), (87, 163, 171),(116, 170, 176),(66, 112, 117)]
        self.rectangleList = [(242, 192, 165), (209,159,132),(194, 123, 85), (140, 83, 52)]
        self.circleList = [(248, 217, 252), (225, 167, 232), (193,127,201),(164, 85, 173)]
        self.triangle2List = [(228, 237, 206), (190, 207, 149), (154, 173, 106),(119, 138, 72)]
        self.triangleList = [(250, 227, 172), (255, 223, 145),(255, 206, 87), (255, 193, 43)]
        self.extraList = [(197, 188, 209), (174, 153, 201), (166, 139, 201), (142, 105, 191)]
        self.extraList2 = [(230, 188, 201), (207, 140, 160), (194, 105, 131), (209, 71, 112)]
        self.extraList3 = [(200, 204, 222), (159, 170, 212), (118, 137, 207), (78, 108, 217)]
       
        # list of all of the color palette lists
        self.fullColorList = [self.diamondList, self.rectangleList, self.circleList, self.triangle2List, self.triangleList, self.extraList, self.extraList2, self. extraList3]
        
        # different angle variation for each snowflake
        self.angleCirc = 24
        self.angleDiam = 30
        self.angleTri = 18
        self.angleTri2 = 11
        self.angleSquare = 35

        self.up()
        
        self.screen.onkey(self.topLeftFar, 'q') # when you press the q button, a snowflake will generate in the top left
        self.screen.onkey(self.topLeftMid, 'w') # when you press the w button, a snowflake will generate in the top middle left
        self.screen.onkey(self.topRightMid, 'e') # when you press the e button, a snowflake will generate in the top middle right
        self.screen.onkey(self.topRightFar, 'r') # when you press the e button, a snowflake will generate in the top right
        
        self.screen.onkey(self.bottomLeftFar, 'a') # when you press the a button, a gnowflake will generate in the bottom left
        self.screen.onkey(self.bottomLeftMid, 's') # when you press the s button, a snowflake will generate in the bottom middle left
        self.screen.onkey(self.bottomRightMid, 'd') # when you press the d button, a snowflake will generate in the bottom middle right
        self.screen.onkey(self.bottomRightFar, 'f') # when you press the e button, a snowflake will generate in the bottom right
        
        self.screen.onkey(self.resetPanel, 'space') # when you press the space button, the panel resets completely

        self.screen.onkey(self.circleSnowflake,'1') # when you press 1, a circle snowflake generates
        self.screen.onkey(self.diamondSnowflake,'2') # when you press 2, a diamond snowflake generates
        self.screen.onkey(self.triangleSnowflake, '3') # when you press 3, a triangle snowflake generates
        self.screen.onkey(self.triangle2Snowflake,'4') # when you press 4, a different triangle snowflake generates
        self.screen.onkey(self.squareSnowflake, '5') # when you press 5, a square snowflake generates

        
        self.screen.listen()#Need the screen to listen to the onkey's so that the "a","w","s","d", etc. controls work

    def topLeftFar(self): # topLeftFar defines where the range of the far top left of the panel is
        self.goto(random.randint(-380,-320),random.randint(120,175))
        
    def topLeftMid(self): # topLeftMid defines where the range of the top middle left of the panel is
        self.goto(random.randint(-160,-100),random.randint(120,175))
        
    def topRightMid(self): # topRightMid defines where the range of the top middle right of the panel is
        self.goto(random.randint(100,160),random.randint(120,175))
        
    def topRightFar(self): # topRightFar defines where the range of the far top right of the panel is
        self.goto(random.randint(320,380),random.randint(120,175))
        
    def bottomLeftFar(self): # bottomLeftFar defines where the range of the far bottom left of the panel is
        self.goto(random.randint(-380,-320),random.randint(-175,-120))

    def bottomLeftMid(self): # bottomLeftMid defines where the range of the bottom middle left of the panel is
        self.goto(random.randint(-160,-100),random.randint(-175,-120))
        
    def bottomRightMid(self): # bottomRightMid defines where the range of the bottom right middle of the panel is
        self.goto(random.randint(100,160),random.randint(-175,-120))
        
    def bottomRightFar(self): # bottomRightFar defines where the range of the far bottom right of the panel is
        self.goto(random.randint(320,380),random.randint(-175,-120))
        
    def resetPanel(self): #resetPanel clears the panel and clears what the turtle has drawn
        self.clear()

        
    def circleSnowflake(self): # circleSnowflake generates a circle snowflake
        self.up()
        self.choice1 = random.choice(self.fullColorList) # causes a different color palette to be used each time a snowflake is generated
        
        for i in range(15): # 15 circles will be generated to make up one snowflake
            self.down()           
            self.color(random.choice(self.choice1)) # chooses a random color from the palette selected for each outline
            self.fillcolor(random.choice(self.choice1)) # chooses a random color from the palette selected for each fill
            self.begin_fill()
            self.circle(50) # radius of each circle is 50
            self.end_fill()
            self.up()
            self.right(self.angleCirc) # next circle is placed 24 degrees to the right
            
    def diamondSnowflake(self): #Method to create a diamond snowflake-like shape
        self.up()
        self.choice2 = random.choice(self.fullColorList) # causes a different color palette to be used each time a snowflake is generated
        
        for i in range(12): # 12 diamonds will be generated to make up one snowflake
            self.down()
            self.color(random.choice(self.choice2)) # chooses a random color from the palette selected for each outline
            self.fillcolor(random.choice(self.choice2)) # chooses a random color from the palette selected for each fill
            self.begin_fill()
            self.forward(90)
            self.left(60)
            self.forward(90)
            self.left(120)
            self.forward(90)
            self.end_fill()
            self.up()
            self.right(self.angleDiam) # next diamond is placed 30 degrees to the right
            
    def triangleSnowflake(self): #Method to create a triangle snowflake-like shape
        self.up()
        self.choice3 = random.choice(self.fullColorList) # causes a different color palette to be used each time a snowflake is generated
        
        for i in range(25): # 25 triangles will be generated to make up one snowflake
            self.down()
            self.color(random.choice(self.choice3)) # chooses a random color from the palette selected for each outline
            self.fillcolor(random.choice(self.choice3)) # chooses a random color from the palette selected for each fill
            self.begin_fill()
            self.left(90)
            self.forward(10)
            self.left(120)
            self.forward(90)
            self.end_fill()
            self.up()
            self.right(self.angleTri) # next triangle is placed 18 degrees to the right
            
    def triangle2Snowflake(self): #Method to create a different triangle snowflake-like shape
        self.up()
        self.choice4 = random.choice(self.fullColorList) # causes a different color palette to be used each time a snowflake is generated

        for i in range(25): # 25 triangles will be generated to make up one snowflake
            self.down()
            self.color(random.choice(self.choice4)) # chooses a random color from the palette selected for each outline
            self.fillcolor(random.choice(self.choice4)) # chooses a random color from the palette selected for each fill
            self.begin_fill()
            self.left(90)
            self.forward(90)
            self.left(90)
            self.forward(120)
            self.end_fill()
            self.up()
            self.right(self.angleTri2) # next triangle is placed 11 degrees to the right
           
    def squareSnowflake(self): #Method to create a square snowflake-like shape
        self.up()
        self.choice5 = random.choice(self.fullColorList) # causes a different color palette to be used each time a snowflake is generated
        
        for i in range(25): # 25 squares will be generated to make up one snowflake
            self.down()
            self.color(random.choice(self.choice5)) # chooses a random color from the palette selected for each outline
            self.fillcolor(random.choice(self.choice5)) # chooses a random color from the palette selected for each fill
            self.begin_fill()
            self.left(90)
            self.forward(85)
            self.left(90)
            self.forward(85)
            self.left(90)
            self.forward(85)
            self.left(90)
            self.forward(85)
            self.end_fill()
            self.up()
            self.right(self.angleSquare) # next square is placed 35 degrees to the right
    
        
instance = snowflake() # instantiates the snowflake class
instance2 = managerArt() # instantiates the managerArt class


if __name__=='__main__':
    managerArt()
    turtle.mainloop() #Cleans everything up and waits for interactions



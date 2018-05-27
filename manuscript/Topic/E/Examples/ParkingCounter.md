---
title: TBA
---
# ParkingCounter

This class represents a simple counter to monitor whether a parking lot is full or not; it tracks vehicles entering and leaving the parking lot and allows the counter to be reset when the lot is full or empty. This class illustrates increment and decrement operators and/or the assignment increment or assignment decrement operators.

**Problem Statement**

Write the code that will monitor vehicles entering and leaving a parking lot. The solution must meet the following requirements:

* Should track vehicles entering
* Should track vehicles leaving
* Should get total parking spots
* Should get open (empty) spots
* Should reset lot as full (that is, fill the parking lot)
* Should reset lot as empty (that is, clear all the parking spots of vehicles)

Use the following class diagram when creating your solution.

![ParkingCounter Class Diagram](E-ParkingCounter.png) 

```csharp
namespace Topic.E.Examples
{
    public class ParkingCounter
    {
        public int ParkingSpots { get; private set; }

        public int OpenSpots { get; private set; }

        public ParkingCounter(int parkingSpots)
        {
            this.ParkingSpots = parkingSpots;
            this.OpenSpots = parkingSpots;
        }

        public ParkingCounter(int parkingSpots, int numberOfCars)
        {
            this.ParkingSpots = parkingSpots;
            this.OpenSpots = this.ParkingSpots - numberOfCars;
        }

        public void Leave()
        {
            OpenSpots++;
        }

        public void Enter()
        {
            OpenSpots--;
        }

        public void ResetLotAsEmpty()
        {
            OpenSpots = ParkingSpots;
        }

        public void ResetLotAsFull()
        {
            OpenSpots = 0;
        }
    }
}
```
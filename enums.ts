enum SeatChoice{
    // AISLE, // default values for this variables will be from 0 to n-1
    // MIDDLE,
    // WINDOW,
    // FOURTH,

    // AISLE=10, // now this will start from 10
    // MIDDLE,
    // WINDOW,
    // FOURTH
    
    // AISLE=10, // now this will start from 10
    // MIDDLE=20,
    // WINDOW, // now this will be 21
    // FOURTH
    
    AISLE="aisle", 
    MIDDLE="middle",
    WINDOW="window", 
    FOURTH="fourth"
}

const hcseat=SeatChoice.AISLE
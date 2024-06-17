
# Color Composition

## Description 
This module takes in 3 colors and outputs the resultant color from blending them.

## How it Works
It doesn't work.

## Code
```systemverilog
module color_composition(input x, output y);
    assign y = x[7:4] + x[3:0];
endmodule
```

module color_composition(input x, output y);
    assign y = x[7:4] + x[3:0];
endmodule
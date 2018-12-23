Left shift is essentially multiplying by 2.
Right shift is essentially dividing by 2, truncating decimal (is this the same in all languages?)

Negative numbers can be stored as "two's compliment"
  - what number can you add to the positive number, and get '10000000'
  - find the inverse of the number, and add 1
  - the left most bit is used as the sign of the number (positive, negative) (sign bit)
i.e.- 0 0000001 === 1
      1 1111111

Bit shifting
  - logical vs arithmetic (particularly with right shifts, negative numbers
    expressed with two's compliment)
    - logical shifts all bits
    - mathematical, shift all bits, then replace signed bit with original sign
      - still maintains the "divide by 2" approximation of right shifts

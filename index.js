// calculator
const Calculator = (A, B, C) => {
    switch (A){
      case '+':
        return B+C
      break;
      case '-':
        return B-C
      break;
      case '*':
        return B*C
      break;
      case '/':
        return B/C
      break;
      default:
        return undefined
      break;
    }
  };

// check divisibility
  const Check_divisibility = (N) => {
    if(N%6==0 && N%9==0){
      return "Divisible by both";
    }
    else{
      return "Not Divisible by both";
    }
};

// is eligible for vote
const isEligible = (a) => {
    if(a>=18){
      return "Eligible for Voting";
    }
    else{
      return "Not Eligible for Voting";
    }
};

// find relation
const findRelation = (x,y) => {
    if(x<y){
      return x+" is smaller than "+y
    }
    else if(x>y){
      return x+" is greater than "+y
    }
    else {
      return x+" is equal to "+y
    }
};

// fins grades
const findGrades = (a) => {
    switch (true){
      case (a<=10):
        return "E"
      break;
      case (a>=11 && a<=20):
        return "D"
      break;
      case (a>=21 && a<=30):
        return "C"
      break;
      case (a>=31 && a<=40):
        return "B"
      break;
      case (a>=41 && a<=50):
        return "A"
      break;
      default:
         return undefined
    }
};

// get value
const getValue = (a) => {
    if(a=='P' || a=='p'){
      return "PrepBytes"
    }
    else if(a=='Z' || a=='z'){
      return "Zenith"
    }
    else if(a=='E' || a=='e'){
      return "Expert Coder"
    }
    else if(a=='D' || a=='d'){
      return "Data Structure"
    }
    else{
      return undefined
    }
};

// max out of three
const Max_out_of_three = (A,B,C) => {
    if (A!=B && B!=C && C!=A){
      if(A>B && A>C){
        return A
      }
      else if(B>A && B>C){
        return B
      }
      else {
        return C
      }     
    }
    else{
      return "-1"
    }
  };

// find second smallest
  const findSndSmallest = (x,y,z) => {
    if (x!=y && y!=z && z!=x){
      if(x>y && x>z){
        if(y>z)
          return y;
        else
          return z;
      }
      else if(y>x && y>z){
        if(x>z)
          return x;
        else
          return z;
      }
      else if(z>y && z>x){
        if(y>x)
          return y;
        else
          return x;
      }
      else
        return undefined;
    }
    else 
      return undefined;
  };

// triangle check
  const Triangle_Check = (A,B,C) => {
    if(A<90 && B<90 && C<90){
      return "acute"
    }
    else if(A>=90 && A<180){
      if (B<90 && C<90){
        return "obtuse"
      }
      else{
        return undefined
      }
    }
    else if(B>=90 && B<180){
        if (A<90 && C<90){
          return "obtuse"
        }
        else{
          return undefined
        }
      }
    else if(C>=90 && C<180){
        if(A<90 && B<90){
          return "obtuse"
        }
        else{
          return undefined
        }
      }
    else{
      return undefined
    }
};
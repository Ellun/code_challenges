public class Solution {
    
    public static int factorial(int n){
        if (n < 0) {
            return "Must be positive integer";
        }
        // BASE CASE:
        if (n <= 1) {
            return 1;
        }
        // RECURSIVE CASE:
        else {
            return n * factorial(n-1);
        } 
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
            int n = in.nextInt();
        in.close();
        
        System.out.println(factorial(n));
           
    }
}

using System;
using System.Linq;

class Program
{
    const int MAX = 100;

    static int Sum(int[] arr)
    {
        return arr.Sum();
    }

    static void Main()
    {
        Console.Write("Enter the number of elements (1-100): ");
        if (!int.TryParse(Console.ReadLine(), out int n) || n < 1 || n > MAX)
        {
            Console.WriteLine("Invalid input. Please enter a number between 1 and 100.");
            return;
        }

        int[] arr = new int[n];
        // Assuming you fill the array here

        Console.WriteLine($"The sum of the array is {Sum(arr)}");
    }
}
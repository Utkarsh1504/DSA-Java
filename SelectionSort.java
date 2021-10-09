import java.util.Scanner;

public class SelectionSort {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter how many number of elements you want in the array");
int n=sc.nextInt();
int a[]=new int[n];
for(int i=0;i<a.length;i++)
{
	a[i]=sc.nextInt();
}
System.out.println("Your array");
for(int l:a)
{
	System.out.print(l+" ");
}

System.out.println();

System.out.println("1.Bubble sort\n2.Selection\nChoose 1 or 2.");
int ch=sc.nextInt();
switch(ch)
{
case 1:
	int b[]=bubble(a);
	for(int d:b)
	{
		System.out.print(d+" ");
	}
break;
case 2:
	int s[]=selection(a);
	for(int c:s)
	{
		System.out.print(c+" ");
	}
}


	}
static int[] bubble(int[] a) {
		for(int i=0;i<a.length-1;i++)
		{
			for(int j=0;j<a.length-i-1;j++)
			{
				if(a[j+1]<a[j])
				{
					int temp=a[j+1];
					a[j+1]=a[j];
					a[j]=temp;
				}
			}
		}
return a;	
}
static int[] selection (int a[])
{
	for(int i=0;i<a.length-1;i++)
	{ int minindex=i;
		for(int j=i;j<a.length;j++)
		{
			if(a[j]<a[minindex])
			{
				minindex=j;
			}
		int temp=a[i];
		a[i]=a[minindex];
		a[minindex]=temp;
		}
	}
return a;
}
}

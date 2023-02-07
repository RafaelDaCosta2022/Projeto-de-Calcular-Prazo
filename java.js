import java.util.Random;

public class RandomNumbers {
    public static void main(String[] args) {
        Random random = new Random();
        int[] randomNumbers = new int[6];
        for (int i = 0; i < randomNumbers.length; i++) {
            randomNumbers[i] = random.nextInt(60) + 1;
        }
        for (int num : randomNumbers) {
            System.out.print(num + " ");
        }
    }
}

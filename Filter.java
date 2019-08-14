import java.io.*;

public class Filter {

    private static final String readFile = "./words.txt";
    private static final String writeFile = "./ize-words.txt";

    public static void main(String[] args) { filter(); }

    private static void filter() {
        BufferedReader br = null;
        BufferedWriter bw = null;

        try {
            br = new BufferedReader(new FileReader(readFile));
            bw = new BufferedWriter(new FileWriter(writeFile));
        } catch (IOException e) {
            e.printStackTrace();
        }

        String line;
        try {
            while (br != null && bw != null && (line = br.readLine()) != null) {
                if (isValid(line)) { bw.write(line + "\n");  }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static boolean isValid(String line) {
        return line.length() >= 3 && line.indexOf("ize") == line.length() - 3;
    }
}

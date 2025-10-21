package com.db;

import java.sql.*;

public class DBConnect {

    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/community_barter_db?serverTimezone=UTC";
        String user = "root";            // change if needed
        String password = "";            // change to your password

        // Optional: ensure driver present (JDBC 4+ auto-registers if on classpath)
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.err.println("MySQL JDBC driver not found on classpath.");
            e.printStackTrace();
            return;
        }

        String query = "SELECT * FROM users";

        // try-with-resources ensures resources are closed
        try (Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            System.out.println("✅ Connected to MySQL database 'community_barter_db'.");

            while (rs.next()) {
                System.out.println("User ID: " + rs.getInt("id"));
                System.out.println("Name: " + rs.getString("name"));
            }

        } catch (SQLException e) {
            System.err.println("SQL error:");
            e.printStackTrace();
        }
    }
}

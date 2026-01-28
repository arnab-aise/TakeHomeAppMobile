package com.takehomeappmobile

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import androidx.appcompat.app.AppCompatActivity

class SplashActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Delay for 2 seconds to display the splash screen
        Handler(Looper.getMainLooper()).postDelayed({
            // Start the MainActivity
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
            
            // Finish the splash activity to prevent going back to it
            finish()
        }, 2000) // 2000 milliseconds = 2 seconds
    }
}

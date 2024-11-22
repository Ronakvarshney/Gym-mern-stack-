import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-gray-900 text-gray-300 py-10">
            <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                
                <div>
                    <h2 class="text-xl font-semibold mb-4">Contact Us</h2>
                    <p class="text-gray-400">123 Gym Street, Fitness City</p>
                    <p class="text-gray-400">Phone: (123) 456-7890</p>
                    <p class="text-gray-400">Email: contact@gymfitness.com</p>
                </div>

              
                <div>
                    <h2 class="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-gray-100">About Us</a></li>
                        <li><a href="#" class="hover:text-gray-100">Tutorials</a></li>
                        <li><a href="#" class="hover:text-gray-100">Dashboard</a></li>
                        <li><a href="#" class="hover:text-gray-100">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-semibold mb-4">Follow Us</h2>
                    <div class="flex space-x-4">
                        <a href="#" class="hover:text-gray-100">
                            <i class="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="#" class="hover:text-gray-100">
                            <i class="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="#" class="hover:text-gray-100">
                            <i class="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>

           
            <div class="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
                <p>&copy; 2024 Gym Fitness. All rights reserved.</p>
            </div>
        </footer>

    )
}

export default Footer
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Facebook, Instagram, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">The Last Piece of Software You'll Ever Need</h1>
          <p className="text-xl mb-8">Streamline your workflow, boost productivity, and scale your business with our all-in-one SaaS solution.</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["User-Friendly Interface", "24/7 Support", "Highly Customizable", "Secure and Reliable"].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-blue-600 text-white rounded-full p-3 mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Basic", "Pro", "Enterprise"].map((tier, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">{tier}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-4xl font-bold text-center mb-4">${(index + 1) * 10}/mo</p>
                  <ul className="mb-8 flex-grow">
                    {[...Array(3 + index)].map((_, i) => (
                      <li key={i} className="flex items-center mb-2">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Feature {i + 1}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Sign Up</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-center max-w-3xl mx-auto mb-12">
            We are a team of passionate developers and designers committed to creating innovative software solutions that empower businesses to thrive in the digital age. Our mission is to simplify complex processes and provide unparalleled value to our customers.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Message" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
            <div className="space-y-4">
              <p><strong>Email:</strong> info@example.com</p>
              <p><strong>Phone:</strong> +1 (123) 456-7890</p>
              <p><strong>Address:</strong> 123 SaaS Street, Tech City, 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="mr-4">Privacy Policy</a>
              <a href="#" className="mr-4">Terms of Service</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"><Facebook className="h-6 w-6" /></a>
              <a href="#" aria-label="Twitter"><Twitter className="h-6 w-6" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
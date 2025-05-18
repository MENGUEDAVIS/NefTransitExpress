import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './layouts/SectionContainer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import LeafletMap from '@/components/ui/leaflet-map';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ContactFormData } from '@/lib/types';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  phone: z.string().optional(),
  subject: z.string().min(3, { message: "Le sujet doit contenir au moins 3 caractères" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" })
});

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous contacterons bientôt.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
      console.error(error);
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Adresse",
      details: ["Ekie, au carrefour de l'amitié", "en face du collège Le Bon Berger"]
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Téléphone",
      details: ["+237 XXX XXX XXX", "+237 XXX XXX XXX"]
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: ["info@neftransit.com", "contact@neftransit.com"]
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Heures d'ouverture",
      details: ["Lun - Ven: 8h00 - 18h00", "Sam: 9h00 - 13h00"]
    }
  ];

  return (
    <SectionContainer id="contact" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wider text-[#2699D6] font-semibold mb-2">Contact</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-['Montserrat']">Contactez-nous</h3>
        <div className="w-20 h-1 bg-[#2699D6] mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-700">
          N'hésitez pas à nous contacter pour toute question ou demande. Notre équipe est à votre disposition pour vous accompagner dans vos démarches.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#2699D6]/10 flex items-center justify-center text-[#2699D6] mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">{item.title}</h4>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-700">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md h-80">
            <LeafletMap 
              center={[3.844, 11.502]} 
              zoom={15}
              className="w-full h-full"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-gray-800 mb-6 font-['Montserrat']">Envoyez-nous un message</h4>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom complet <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Votre email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre numéro de téléphone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sujet <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Sujet de votre message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Votre message" 
                          {...field} 
                          rows={5}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#2699D6] hover:bg-[#0A4D8F]"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Contact;

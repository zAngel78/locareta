import { Phone, Mail, Calendar, MessageSquare } from 'lucide-react';

interface Agent {
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
}

export default function AgentContactCard({ agent }: { agent: Agent }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sticky top-24">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <img 
            src={agent.image} 
            alt={agent.name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
          />
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-brand-dark">{agent.name}</h3>
          <p className="text-sm text-slate-500">{agent.role}</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <button className="w-full py-3 px-4 bg-brand-dark text-white rounded-xl font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
          <MessageSquare size={18} />
          Contactar Agente
        </button>
        <button className="w-full py-3 px-4 bg-white border border-slate-200 text-brand-dark rounded-xl font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
          <Calendar size={18} />
          Agendar Visita
        </button>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
        <a href={`tel:${agent.phone}`} className="flex items-center gap-2 text-slate-600 hover:text-brand-dark transition-colors">
          <Phone size={18} />
          <span className="text-sm font-medium">Llamar</span>
        </a>
        <a href={`mailto:${agent.email}`} className="flex items-center gap-2 text-slate-600 hover:text-brand-dark transition-colors">
          <Mail size={18} />
          <span className="text-sm font-medium">Email</span>
        </a>
      </div>

      <div className="mt-6 bg-slate-50 p-4 rounded-xl">
        <p className="text-xs text-slate-500 text-center">
          Al enviar este formulario, aceptas nuestros Términos de Uso y Política de Privacidad.
        </p>
      </div>
    </div>
  );
}

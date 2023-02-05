import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from '../NotificationButton';
import './style.css';

/** ReactJS Hooks:
 *  
 *  + Mas, o que é um Hook?:
 * 
 *  \-> Hooks são funções que permitem a você “ligar-se” 
 *      aos recursos de state e ciclo de vida do React: 
 * 
 *      - Montagem = constructor -> render -> componentDidMount 
 *      - Atualização = shouldComponentUpdate -> render -> componentDidUpdate
 *      - Desmontagem = componentWillUnmount  
 *      
 *      a partir de componentes funcionais. Hooks não 
 *      funcionam dentro de classes — eles permitem 
 *      que você use React sem classes. 
 * 
 *  \-> Hook é um termo usado para indicar uma 
 *      inserção de código em alguma operação 
 *      padrão para fornecer personalização.
 * 
 *  \-> São uma nova adição ao React 16.8.
 * 
 *  \-> Eles permitem que você use o state e outros 
 *      recursos do React sem escrever uma classe.
 * 
 *  \-> Hooks proveem uma API mais direta para os conceitos 
 *      de React: props, state, context, refs e ciclo de vida.
 *      Hooks também oferecem uma poderosa nova forma de combiná-los. 
 * 
 *  + Componentes Complexos se Tornam Difíceis de Entender:
 * 
 *  \-> Hooks permitem que você divida um componente em 
 *      funções menores baseadas em pedaços que são relacionados 
 *      (como configurar uma subscription ou captura de dados), 
 *      em vez de forçar uma divisão baseada nos métodos de ciclo 
 *      de vida. 
 * 
 *  + Classes Confundem tanto Pessoas quanto Máquinas:
 *  
 *  \-> Hooks permitem você usar mais das funcionalidades 
 *      de React sem classes.Conceitualmente, componentes 
 *      React sempre estiveram mais próximos de funções. 
 *      Hooks adotam funções, mas sem sacrificar o espírito 
 *      prático de React. Hooks proveem acesso a válvulas de 
 *      escape imperativas e não requerem você a aprender 
 *      técnicas complexas de programação funcional ou reativa.
 * 
*/

function SalesCard() {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    /** State Hook:
     *  
     *  \-> useState é um Hook. Nós o chamamos dentro de um componente 
     *      funcional para adicionar alguns states locais a ele. React 
     *      irá preservar este state entre re-renderizações;
     *  
     *  \-> useState retorna um par: o valor do state atual e uma função 
     *      que permite atualizá-lo. Você pode chamar essa função a partir 
     *      de um manipulador de evento ou de qualquer outro lugar. É 
     *      parecido com this.setState em uma classe, exceto que não 
     *      mescla o antigo state com o novo;
     *  
     *  \-> O único argumento para useState é o state inicial;
     *  
     *  \-> Diferente de this.state, o state não precisa ser um objeto — 
     *      apesar de que possa ser se você quiser. 
     *  
     *  \-> O argumento de state inicial é utilizado apenas durante a 
     *      primeira renderização.
     */

    /** Hook de Efeito:
    *  
    *  \-> O Hook de Efeito, useEffect, adiciona a funcionalidade de 
    *      executar efeitos colaterais através de um componente funcional. 
    *      Segue a mesma finalidade do componentDidMount, componentDidUpdate, 
    *      e componentWillUnmount em classes React, mas unificado em uma mesma API.
    * 
    */

    //Declaração de um estado dentrro de um componente react
    //desestruturação com useState
    //    dado ,   função que altera o dado
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    /**
     * - useState para armazenar a lista de vendas
     *                                /-> useState tipado, com o tipo dentro de <>, 
     *                                |   que nesse caso será uma lista de Sale 
     *                                |
                                      |         /-> lista vazia                       */
    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        // formatando data
        const dmin = minDate.toISOString().slice(0,10);
        const dmax = maxDate.toISOString().slice(0,10);
        
        /** 
         * A requisição retorna um objeto especial do JS chamado "promisse"
         * Promisse, resumidamente, é um objeto que vai executar alguma operação
         * essa operação pode dar certo ou falhar, para capturar o que dá certo
         * usamos a função .then(), que vai receber o objeto da resposta que deu 
         * certo, e podemos manipulá-lo da forma que queremos.
         */
        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => {
                //.data = exibe os dados da resposta
                // .content = pega apenas a lista de vendas
                // chamar a setSales para atualizar o setSales com o valor da API
                setSales(response.data.content);
            })
    }, [minDate, maxDate]);
    //     \-> configurando o use Effect para atualizar/mudar quando algum dos dados declarados no array mudar

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //.map percorre a lista e fazer alguma operação com cada elemento da lista
                            //         /-> Apelido, pode ser qualquer nome, escolhe-se o mais semântico
                            sales.map(sale => {
                                return (
                                    /**
                                     *  Exigência do React:
                                     *  \-> Quando se faz uma rendenrização de conteúdo baseado em uma lista
                                     *      temos que colocar em cada elemento um atributo que se chama key,
                                     *      e temos que colocar um valor único para essa key.    
                                     *   
                                     */
                                    <tr key={sale.id}>
                                        <td className="show992">{sale.id}</td>
                                        <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sallerName}</td>
                                        <td className="show992">{sale.visited}</td>
                                        <td className="show992">{sale.deals}</td>
                                        <td>R$ {sale.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="dsmeta-red-btn-container">
                                                <NotificationButton saleId={sale.id}/>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default SalesCard;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function FAQ() {
    const classes = useStyles();
    return (
        <div className="container-v1">
            <div className="background-div"></div>

            <div className="title-container">
                <h1 className="title-v1">Frequently Asked Questions</h1>
            </div>
            <div className="info-box-topPadLow">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading} style={{color:'#810000'}}>Is it safe for me to drink bubble tea at Sushi Factory if I'm lactose intolerant?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yes! We use non-dairy creamer in our bubble teas and the regular milk used can be switched out for either soymilk or almond milk at an added cost!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading} style={{color:'#810000'}}>Do the milk teas already come with bubbles?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yes, they do! You do not need to ask for bubbles unless you want to add extra bubbles, which is an additional $0.60.
                            However, our iced teas and dodo drinks do not have bubbles unless otherwise specified. 
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading} style={{color:'#810000'}}>Am I able to substitute certain toppings/ingredients in my drinks or sushi</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            We typically do allow for substitutions to be made for orders depending on the kind of change made. Some substitutions will have an added cost,
                            while others do not and come free of charge. Please speak to manager or employee or call in for further details.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading} style={{color:'#810000'}}>My student organization wants to hold a fundraiser/percentage night at Sushi Factory!
                        How do I go about setting one up?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            As a local business here in Blacksburg, we love helping our student organizations here at VT! If you want to hold a fundraiser, 
                            please speak to a manager in the store and he/she will be more than willing to discuss scheduling one in the future. We only consider 
                            student groups and organizations with a general member count of 50 or more people. During the fundraiser, your members simply just need
                            to state that they're there for the event and we'll be sure to count it towards your fundraising total! Cash payment is highly preferred
                            over card!        
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading} style={{color:'#810000'}}>I'd like to work part-time for Sushi Factory! How do I apply?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            We are unfortunately not looking for any new workers right now. If we are looking for new hires, we usually have hiring flyers posted
                            in the store with contact information for those interested. We typically look for underclassmen or students with a future graduation date
                            of two years or more when it comes to applicants and potential workers.    
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>

        </div>

    )
};

export default FAQ;
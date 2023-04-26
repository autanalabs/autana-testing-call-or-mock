autana-testing-call-or-mock
=====================

Node-RED node for call or mock

## Install

Run the following command in your Node-RED user directory - typically `~/.node-red`

        npm install autana-testing-call-or-mock

## Information

<p>Calls a flow that starts with a named <code>link in</code> node and finish with a <code>link out</code> node configured
       in 'return' mode, and passes on the response. (a function flow)</p>
   <h3>Inputs</h3>
   <dl class="message-properties">
      <dt class="optional">target<span class="property-type">string</span></dt>
      <dd>
         <p>The name of the <code>link in</code> node to call on normal/runtime execution mode.</p>
         <p>To enable the test execution mode (Unit Tests), You must set the <code>Global.runtime_profile</code> variable to <code>"TEST"</code>.<p>
         <p>If test execution mode is enabled, the suffix <code>.mock</code> is added to <code>target</code> before to perform the call.<p>
      </dd>
   </dl>

   <h3>Details</h3>

   <p>The <code>target link in</code> node can be placed on any tab.</p>

   <p>When this node receives a message, it is passed to the connected <code>target link in</code> node.
   <p>It then waits for a response which it then sends on.</p>
   <p>If no response is received within the configured timeout, default 30 seconds, the node
       will log an error that can be caught using the <code>catch</code> node.</p>
   <p>
    <ul>
      <li>If there is a <code>link in</code> node with <code>target</code> name, it will be called</li>
      <li>If there are two or more <code>link in</code> nodes with the same <code>target</code> name, an error will be raised</li>
      <li>The <code>link call</code> cannot call a <code>target link in</code> node inside a subflow</li>
    </ul>
    </p>
  
